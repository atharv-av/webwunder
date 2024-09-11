import LayoutTemplate from "@/components/layout/home-template"

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <LayoutTemplate>
            {children}
        </LayoutTemplate>

    )
  }