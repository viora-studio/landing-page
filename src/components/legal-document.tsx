type LegalSection = {
  title: string
  text?: string
  items?: Array<{ subtitle: string; text: string }>
}

export function LegalDocument({
  badge,
  title,
  intro,
  note,
  sections,
}: {
  badge: string
  title: string
  intro: string
  note?: string
  sections: LegalSection[]
}) {
  return (
    <article className="mx-auto w-full max-w-3xl px-5 pt-32 pb-16 sm:px-8 sm:pt-36 sm:pb-24">
      <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-brand">{badge}</p>
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
      <p className="mt-8 text-lg leading-8 text-muted-foreground" dangerouslySetInnerHTML={{ __html: intro }} />
      {note ? (
        <p
          className="mt-5 text-sm leading-7 text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: note }}
        />
      ) : null}
      <div className="mt-12 space-y-10">
        {sections.map((section) => (
          <section key={section.title} className="space-y-4">
            <h2 className="text-xl font-semibold tracking-tight">{section.title}</h2>
            {section.text ? <p className="text-base leading-8 text-muted-foreground">{section.text}</p> : null}
            {section.items?.map((item) => (
              <div key={item.subtitle} className="space-y-2 pl-4">
                <h3 className="font-medium">{item.subtitle}</h3>
                <p className="text-base leading-8 text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </section>
        ))}
      </div>
    </article>
  )
}
