export default function SpaceBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">

      <div className="space-bg" />

      <div className="nebula nebula1" />
      <div className="nebula nebula2" />
      <div className="nebula nebula3" />

      <div className="planet planet-left" />
      <div className="planet planet-right" />

      <div className="stars" />

      <div className="meteor meteor1" />
      <div className="meteor meteor2" />
      <div className="meteor meteor3" />
      <div className="meteor meteor4" />

      <div className="noise" />

      <div className="vignette" />

    </div>
  );
}