import Database from "better-sqlite3"
import EVENTS from "./data/events.json" with { type: "json" }
import USERS from "./data/users.json" with { type: "json" }
import RSVPS from "./data/rsvps.json" with { type: "json" }
import type { MyEvent, Rsvp, User } from "./types.ts"

const db = new Database("src/sqlite.db", { verbose: console.log })

console.log(`Initializing database: ${db.name} `)

db.pragma("foreign_keys = ON")

db.exec(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL UNIQUE,
        name TEXT NOT NULL,
        email TEXT
    );
    `)
db.exec(`
        CREATE TABLE IF NOT EXISTS events (
          id INTEGER PRIMARY KEY,
          title TEXT NOT NULL,
          description TEXT,
          image_url TEXT,
          date DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
          host_id INTEGER REFERENCES users NOT NULL
          );
          CREATE INDEX IF NOT EXISTS eventhosts ON events(host_id);
          `)

const upsertUser = db.prepare<User>(`
    INSERT INTO users VALUES (@id, @username, @name, @email)
    ON CONFLICT(id) DO NOTHING
    `)

USERS.map((user: User) => upsertUser.run(user))

const upsertEvent = db.prepare<MyEvent>(`
    INSERT INTO events VALUES (@id, @title, @description, @image_url, @date, @host_id)
    ON CONFLICT(id) DO NOTHING
    `)

EVENTS.map((event: MyEvent) => {
  upsertEvent.run(event)
})

db.exec(`
    CREATE TABLE IF NOT EXISTS rsvps (
        event_id INTEGER REFERENCES events NOT NULL,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        UNIQUE(event_id, email) ON CONFLICT REPLACE
    );
    CREATE INDEX IF NOT EXISTS rsvpevents ON rsvps(event_id);
`)

const upsertRSVP = db.prepare<Rsvp>(`
    INSERT INTO rsvps VALUES (@event_id, @name, @email)
`)
RSVPS.map((rsvp: Rsvp) => {
  upsertRSVP.run(rsvp)
})

export default db
