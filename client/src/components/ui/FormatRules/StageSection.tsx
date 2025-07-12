// 文件路径: /workspaces/robodrone/client/src/components/ui/FormatRules/StageSection.tsx

interface StageSectionProps {
  title: string;
  description: string;
}

export default function StageSection({
  title,
  description,
}: StageSectionProps) {
  return (
    <section className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-2xl font-semibold text-gray-900">{title}</h2>
      <p className="leading-relaxed text-gray-700">{description}</p>
    </section>
  );
}
