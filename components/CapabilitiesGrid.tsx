const capabilities = [
  {
    label: "[Protocol conversion]",
    description: "CSV, XML, JSON, IEC 61131-3, PDF",
  },
  {
    label: "[Register mapping]",
    description: "Modbus, OPC-UA, BACnet address maps",
  },
  {
    label: "[Validation]",
    description: "Address range checks, type verification",
  },
  {
    label: "[Batch processing]",
    description: "10K+ registers per run, <2s",
  },
];

export default function CapabilitiesGrid() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-content px-6">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {capabilities.map(({ label, description }) => (
            <li key={label} className="flex flex-col gap-1">
              <span className="font-mono text-xs text-accent">{label}</span>
              <p className="text-text-muted text-sm">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
