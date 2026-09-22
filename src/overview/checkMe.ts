// Exercise 1

interface Language {
  name: string
  officialName: string
  released: number
  creator: string
  company: string
}

const logLanguage = (lang: Language) => {
  console.log(lang)
}

const js: Language = {
  name: "JavaScript",
  officialName: "ECMAScript",
  released: 1995,
  creator: "Brendan Eich",
  company: "Netscape",
}

const ts: Language = {
  name: "TypeScript",
  officialName: "TypeScript",
  released: 2012,
  creator: "Anders Hejlsberg",
  company: "Microsoft",
}

logLanguage(js)
logLanguage(ts)
