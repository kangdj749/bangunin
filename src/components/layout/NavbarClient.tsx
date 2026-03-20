"use client"

import { useState, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { FiMenu } from "react-icons/fi"

import MobileMenu from "@/components/layout/MobileMenu"
import { menuItems } from "@/data/menuItems"
import type { BlogPost } from "@/types/blog"
import { cloudinaryImage } from "@/lib/cloudinaryImage";

interface Props {
  posts: BlogPost[]
}

export default function NavbarClient({ posts }: Props) {

  const logo =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1774017311/1_BANGUN.IN_zzdfs7.png";

  const [mobileOpen, setMobileOpen] = useState(false)
  
  const handleOpen = useCallback(() => {
    setMobileOpen(true)
  }, [])

  const handleClose = useCallback(() => {
    setMobileOpen(false)
  }, [])

  return (
    <>
      <nav
        className="
        fixed top-0 w-full z-50
        bg-[rgb(var(--color-surface))]
        border-b
        border-[rgb(var(--color-border))]
      "
      >

        <div className="container-main flex items-center justify-between h-[56px] md:h-[64px] gap-4">

         {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={cloudinaryImage(logo, "logo")}
              alt="Bangun.in"
              width={120}
              height={32}
              className="h-[26px] md:h-[30px] w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-7 text-[12px] font-medium text-[rgb(var(--color-text))]">

            {menuItems.map((item, idx) => (

              <li key={idx} className="relative group">

                <Link
                  href={item.href}
                  className="
                  relative py-2
                  hover:text-[rgb(var(--color-primary))]
                "
                >
                  {item.label}
                </Link>

                {/* SUBMENU */}
                {item.children && (

                  <ul
                    className="
                    absolute left-0 top-full mt-2 w-52
                    bg-[rgb(var(--color-surface))]
                    border border-[rgb(var(--color-border))]
                    shadow-[var(--shadow-soft)]
                    opacity-0 invisible
                    translate-y-1
                    group-hover:opacity-100
                    group-hover:visible
                    group-hover:translate-y-0
                    transition-all duration-200
                  "
                  >

                    {item.children.map((child, cidx) => (

                      <li key={cidx}>

                        <Link
                          href={child.href}
                          className="
                          block px-4 py-2.5 text-[11.5px]
                          hover:bg-[rgb(var(--color-secondary))]/10
                          hover:text-[rgb(var(--color-primary))]
                        "
                        >
                          {child.label}
                        </Link>

                      </li>

                    ))}

                  </ul>

                )}

              </li>

            ))}

            {/* CTA */}
            <li>

              <Link
                href="/kontak"
                className="
                ml-2
                px-4 py-2
                text-[11px]
                rounded
                bg-[rgb(var(--color-primary))]
                text-[rgb(var(--color-white))]
              "
              >
                Konsultasi
              </Link>

            </li>

          </ul>

          {/* Mobile button */}
          <div className="flex items-center md:hidden">

            <button
              onClick={handleOpen}
              className="text-[rgb(var(--color-text))]"
            >
              <FiMenu size={20} />
            </button>

          </div>

        </div>

      </nav>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={handleClose}
        posts={posts}
      />

    </>
  )
}