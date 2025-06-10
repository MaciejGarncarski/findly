import Image from "next/image";
import logo from "@/assets/logo.png";

type Props = {
  width?: number;
  height?: number;
};

export function Logo({ width = 80, height = 50 }: Props) {
  return <Image src={logo} alt="Findly" width={width} height={height} />;
}
