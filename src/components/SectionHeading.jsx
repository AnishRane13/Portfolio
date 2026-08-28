// Shared section header: "-- 03 / WORK" kicker above a two-tone display title.
const SectionHeading = ({ index, kicker, title, accent, align = "left" }) => (
  <div
    className={align === "center" ? "text-center" : ""}
    data-aos="fade-up"
  >
    <p className="text-xs tracking-[0.35em] text-accent mb-6">
      <span className="text-mist">-- </span>
      {index} / {kicker}
    </p>
    <h2 className="text-4xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-tight">
      {title} {accent && <span className="text-accent">{accent}</span>}
    </h2>
  </div>
);

export default SectionHeading;
