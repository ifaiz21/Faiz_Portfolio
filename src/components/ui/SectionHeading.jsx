export default function SectionHeading({
  icon: Icon,
  title,
  highlight,
  subtitle,
  align = "center",
}) {
  const alignClass =
    align === "center"
      ? "text-center items-center"
      : "text-left items-start";

  return (
    <div className={`mb-14 flex flex-col ${alignClass}`}>
      <h2 className="flex items-center gap-3 text-3xl font-bold text-white sm:text-4xl">
        {Icon && <Icon className="h-8 w-8 text-accent" strokeWidth={1.5} />}
        {title}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-base text-gray-400 sm:text-lg">
          {subtitle}
        </p>
      )}
      <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
    </div>
  );
}
