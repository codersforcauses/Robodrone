import Image from "next/image";

type Partner = {
  name: string;
  logo: string;
  link: string;
};

interface SponsorSectionProps {
  partners: Partner[];
}

const SponsorSection = ({ partners }: SponsorSectionProps) => {
  return (
    <section className="bg-gray-100 py-10 text-center">
      <h2 className={`font-montserrat text-2xl font-bold`}>
        Powered By Our{" "}
        <span className={`font-montserrat text-orange-500`}>Partners</span>
      </h2>
      <div className="mt-6 flex flex-wrap justify-center gap-6 px-4">
        {partners.map((partner, index) => (
          <a
            key={index}
            href={partner.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center transition hover:opacity-80"
          >
            <div className="relative h-16 w-32">
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                objectFit="contain"
                className="object-contain"
              />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default SponsorSection;
