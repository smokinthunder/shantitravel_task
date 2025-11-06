import Image from "next/image";
import { Button } from "@/components/ui/button";
import { fetchHomePageData, getStrapiMedia } from "@/lib/strapi";
import DescriptionWithReadMore from "@/components/custom/description";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default async function Home() {
  const homePageData = await fetchHomePageData();

  if (!homePageData) {
    return (
      <section className="flex min-h-screen items-center justify-center">
        <p className="text-gray-500">Loading...</p>
      </section>
    );
  }

  const {
    title,
    description,
    region,
    button1,
    button2,
    image1,
    image2,
    climate,
    toursSection,
  } = homePageData;


  return (
    <section className="container mx-auto px-4 py-16 ">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="md:w-1/2 space-y-6">
          {region && <p>{region}</p>}
          {title && <p className="text-3xl font-serif ">{title}</p>}
          <DescriptionWithReadMore description={description} />
          <div className="flex flex-row ">
            {button1 && (
              <a href={button1.href ?? "#"}>
                <Button className="m-1">{button1.label}</Button>
              </a>
            )}
            {button2 && (
              <a href={button2.href ?? "#"}>
                <Button className="m-1" variant="outline">
                  {button2.label}
                </Button>
              </a>
            )}
          </div>
        </div>
        <div className="relative w-96 h-96 flex justify-center items-center">
          {image1 && (
            <div className="absolute w-56 h-96 overflow-hidden transform -rotate-6 -translate-x-20 z-10">
              <Image
                src={getStrapiMedia(image1.url)}
                alt="Image 1 left"
                width={320}
                height={320}
                unoptimized
                className="object-cover rounded-2xl"
              />
            </div>
          )}

          {image2 && (
            <div className="absolute w-56 h-96 overflow-hidden transform rotate-6 translate-x-20 z-20">
              <Image
                src={getStrapiMedia(image2.url)}
                alt="Image 2 right"
                width={320}
                height={320}
                unoptimized
                className="object-cover rounded-2xl"
              />
            </div>
          )}
        </div>
      </div>

      {climate && climate.months && climate.months.length > 0 && (
        <div className="mt-16 overflow-x-auto bg-gray-300 rounded-2xl p-2">
          <Table>
            <TableCaption>
              Average Temperature (°C) and Sunny Days by Month
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Climate In India</TableHead>
                {climate.months.map((monthData) => (
                  <TableHead key={monthData.id}>{monthData.Month}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Avg Temperature (°C)</TableCell>
                {climate.months.map((monthData) => (
                  <TableCell key={`temp-${monthData.id}`}>
                    {monthData.avgTemp}°C
                  </TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell>Sunny Days</TableCell>
                {climate.months.map((monthData) => (
                  <TableCell key={`sunny-${monthData.id}`}>
                    {monthData.sunnyDays}
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </div>
      )}

      {/* Tours Section */}
      {toursSection && (
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif mb-2">{toursSection.title}</h2>
            {toursSection.subtitle && (
              <p className="text-gray-600">{toursSection.subtitle}</p>
            )}
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {toursSection.tourCards?.map((tour) => (
              <a
                key={tour.id}
                href={tour.link || "#"}
                className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Tour Image */}
                {tour.image && (
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={getStrapiMedia(tour.image.url)}
                      alt={tour.title}
                      width={400}
                      height={256}
                      unoptimized
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                {/* Tour Details */}
                <div className="p-6">
                  {/* Location and Duration */}
                  <div className="text-sm text-gray-500 mb-2 uppercase tracking-wide">
                    {tour.location} • {tour.duration}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {tour.title}
                  </h3>

                  {/* Highlights */}
                  {tour.highlights && tour.highlights.length > 0 && (
                    <ul className="space-y-1 mb-4 text-sm text-gray-600">
                      {tour.highlights.map((highlight) => (
                        <li key={highlight.id} className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>{highlight.label}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Price */}
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-lg font-semibold text-primary">
                      {tour.price}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* View All Button */}
          {toursSection.viewAllButton && (
            <div className="text-center mt-8">
              <a href={toursSection.viewAllButton.href || "#"}>
                <Button
                  variant="outline"
                  className="px-8 py-2 border-2 rounded-md hover:bg-primary hover:text-white transition-colors"
                >
                  {toursSection.viewAllButton.label}
                </Button>
              </a>
            </div>
          )}
        </div>
      )}
    </section>
  );
}