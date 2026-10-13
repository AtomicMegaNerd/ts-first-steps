import { Calendar } from "./Icons.js"

const API_URL = import.meta.env["VITE_API_URL"]

interface MyEvent {
  id: number
  host_id: number
  title: string
  date: Date
  image_url?: string
  description?: string
  host?: MyEventHost
  rsvps: [string]
  currentTarget?: HTMLFormElement
}

interface MyEventHost {
  name: string
}

const loadEventsData = async () => {
  try {
    const response = await fetch(`${API_URL}/events`)
    return response.json()
  } catch (e) {
    console.error(e)
  }
}

export const EventModal = (event: MyEvent): string => {
  const formId = `rsvp-form-${event.id}`
  const modalId = `modal-event-${event.id}`
  return `<dialog id="${modalId}">
      <article>
        <header>
          <button
            aria-label="Close"
            rel="prev"
            data-target="${modalId}"
            class="toggle-modal"
          ></button>
          <h3>RSVP to ${event.title}</h3>
        </header>
        <form id="${formId}" data-modal="${modalId}"
            action="${API_URL}/events/${event.id}/rsvp"
            method="POST"
        >
          <label for="rsvp-name-${event.id}">Name:
            <input type="text" id="rsvp-name-${event.id}" class="rsvp-name" name="name" required />
          </label>
          <label for="rsvp-email-${event.id}">Email:
            <input type="email" id="rsvp-email-${event.id}" class="rsvp-email" name="email" required />
          </label>

        </form>
        <footer>
          <button
            role="button"
            class="toggle-modal cancel"
            data-target="${modalId}"
          >Cancel</button>

          <button id="submit-${formId}" role="button" form="${formId}" type="submit">Submit RSVP</button>

        </footer>
      </article>
    </dialog>`
}

export const EventCard = (e: MyEvent): string => {
  const eventDate = new Date(e.date)
  const isPast = eventDate < new Date()
  return `
<article class="event" >
<header>
    ${e.image_url === undefined ? "" : `<img src=${e.image_url} alt="${e.title} thumbnail" />`}
</header>
    <main>
        <h4>${e.title}</h4>
        <p>${Calendar} ${eventDate.toLocaleDateString()}</p>
        <p>Host: ${e.host?.name || `User ${e.host_id}`}</p>
        ${e.description === undefined ? "" : `<p>${e.description}</p>`}
    </main>
    <footer>
        <span>
            ${e.rsvps?.length || 0} ${isPast ? "went" : "going"}
        </span>
        ${
          !isPast
            ? `
            <button role="button" data-target="modal-event-${e.id}" class="toggle-modal"
            title="RSVP to ${e.title}"
            >
        RSVP
        </button>`
            : ""
        }
    </footer>
    ${EventModal(e)}
</article>
    `
}

export const EventsSection = (title: string, events: [MyEvent]) => {
  return `
  <section class='events'>
      <h2>${title} events </h2>
          <div role = "group">
              ${events.map((e) => EventCard(e)).join("") || "No events"}
      </div>
  </section>`
}

// IIFE to asynchronously load the Event data before exporting the component
// https://developer.mozilla.org/en-US/docs/Glossary/IIFE
export const Events = await (async () => {
  const all = await loadEventsData()
  const past = all.filter((e: MyEvent) => new Date(e.date) < new Date())
  const upcoming = all.filter((e: MyEvent) => new Date(e.date) > new Date())
  return `
    ${EventsSection("Upcoming", upcoming)}
    ${EventsSection("Past", past)}
`
})()
