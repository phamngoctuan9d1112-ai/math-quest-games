type Props = {
  icon: string;
  title: string;
  subtitle: string;
};

export default function KingdomHeader({
  icon,
  title,
  subtitle,
}: Props) {
  return (
    <div className="kingdom-header">

      <div className="kingdom-header-overlay" />

      <div className="kingdom-header-glow" />

      <div className="kingdom-header-planet" />

      <div className="kingdom-header-sword">
        {icon}
      </div>

      <div className="kingdom-header-content">

        <div className="kingdom-header-icon">
          {icon}
        </div>

        <div>

          <h2 className="kingdom-header-title">
            {title}
          </h2>

          <p className="kingdom-header-subtitle">
            {subtitle}
          </p>

        </div>

      </div>

    </div>
  );
}