import Image from "next/image"
import { useMDXComponent } from "next-contentlayer/hooks"
import Badge from "./Badge";

const components = {
  Image,
  Badge
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return <Component components={components} />
}
