import Image from "next/image";

export function Logo({ footer = false }: { footer?: boolean }) {
  return (
    <Image
      src={footer ? "/images/logo-carvatel.png" : "/images/logo-carvatel-header.png"}
      alt="Carvatel - Soluciones, Soporte e Innovación"
      width={footer ? 1775 : 1415}
      height={footer ? 887 : 317}
      priority={!footer}
      className={`h-auto object-contain object-left ${footer ? "w-[200px] rounded-xl bg-white p-2" :
         "max-h-[60px] w-[250px] sm:max-h-[80px] sm:w-[260px]"}`}
    />
  );
}
