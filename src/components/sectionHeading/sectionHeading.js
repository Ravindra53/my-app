function SectionHeading({section_title}) {
  return (
    <div class="section-heading-block">
      <div class="section-heading-block__container container">
        <h3 class="section-heading">{section_title ? section_title: 'Section Name here' }</h3>
      </div>
    </div>
  )
}

export default SectionHeading;