"use client";

import { Footer as FooterType } from "@/types";
import { getStrapiMedia, renderBlocksContent } from "@/lib/strapi";
import Image from "next/image";
import Link from "next/link";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import parse from "html-react-parser";

interface FooterProps {
  data: FooterType;
}

export default function Footer({ data }: FooterProps) {
  if (!data) {
    return null;
  }

  const {
    logo,
    footerColumns,
    socialLinks,
    address,
    termsAndConditions,
    sustainablePolicy,
  } = data;

  return (
    <footer className="w-full bg-gray-900 text-gray-300">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Logo and description section */}
          <div className="lg:col-span-3">
            {logo && (
              <Link
                href={logo.isUrl ? logo.url : logo.href}
                className="block mb-6"
              >
                <Image
                  src={logo.isUrl ? logo.url : getStrapiMedia(logo.image?.url)}
                  alt={logo.label || "Logo"}
                  width={180}
                  height={60}
                  className="h-12 w-auto brightness-0 invert object-contain"
                />
              </Link>
            )}

            {/* Sustainable Policy */}
            {sustainablePolicy && sustainablePolicy.length > 0 && (
              <div className="text-sm text-gray-400 leading-relaxed mb-6">
                {parse(renderBlocksContent(sustainablePolicy))}
              </div>
            )}

            {/* Social Links */}
            {socialLinks && socialLinks.length > 0 && (
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.id}
                    href={social.isUrl ? social.url : social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <Image
                      src={
                        social.isUrl
                          ? social.url
                          : getStrapiMedia(social.image?.url)
                      }
                      alt={social.label || "Social"}
                      width={24}
                      height={24}
                      className="w-6 h-6 brightness-0 invert"
                    />
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Footer columns */}
          {footerColumns &&
            footerColumns.map((column) => (
              <div key={column.id} className="lg:col-span-2">
                <h3 className="text-white font-semibold text-lg mb-4">
                  {column.title}
                </h3>
                <ul className="space-y-3">
                  {column.links &&
                    column.links.map((link) => (
                      <li key={link.id}>
                        <Link
                          href={link.href}
                          className="text-sm text-gray-400 hover:text-white transition-colors"
                          target={link.isExternal ? "_blank" : "_self"}
                          rel={
                            link.isExternal ? "noopener noreferrer" : undefined
                          }
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            ))}

          {/* Contact Information */}
          {address && (
            <div className="lg:col-span-3">
              <h3 className="text-white font-semibold text-lg mb-4">
                Contact Us
              </h3>
              <div className="space-y-4 text-sm">
                {address.addressText && (
                  <div className="flex items-start space-x-3">
                    <MapPinIcon className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                    <a
                      href={address.placeHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {address.addressText}
                    </a>
                  </div>
                )}

                {address.phone && (
                  <div className="flex items-center space-x-3">
                    <PhoneIcon className="w-5 h-5 text-gray-400 shrink-0" />
                    <a
                      href={`tel:${address.phone}`}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {address.phone}
                    </a>
                  </div>
                )}

                {address.email && (
                  <div className="flex items-center space-x-3">
                    <EnvelopeIcon className="w-5 h-5 text-gray-400 shrink-0" />
                    <a
                      href={`mailto:${address.email}`}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {address.email}
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom bar - Terms and Conditions */}
      {termsAndConditions && (
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              {/* Terms text */}
              {termsAndConditions.text &&
                termsAndConditions.text.length > 0 && (
                  <div className="text-sm text-gray-400">
                    {renderBlocksContent(termsAndConditions.text)}
                  </div>
                )}

              {/* Terms links */}
              {termsAndConditions.links &&
                termsAndConditions.links.length > 0 && (
                  <div className="flex items-center space-x-6">
                    {termsAndConditions.links.map((link) => (
                      <Link
                        key={link.id}
                        href={link.href}
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                        target={link.isExternal ? "_blank" : "_self"}
                        rel={
                          link.isExternal ? "noopener noreferrer" : undefined
                        }
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
