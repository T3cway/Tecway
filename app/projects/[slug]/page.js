import { getProjectBySlug } from "@/lib/projects";
import { getProjectSchema, getBreadcrumbSchema, getFullUrl } from "@/lib/seo";
import ProjectClient from "./ProjectClient";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://tecway.dev';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    };
  }

  const imageUrl = project.images && project.images.length > 0
    ? `${SITE_URL}/${project.images[0].startsWith("/") ? project.images[0].slice(1) : project.images[0]}`
    : `${SITE_URL}/Tecway.png`;

  return {
    title: project.title,
    description: project.longDescription || project.description,
    openGraph: {
      title: `${project.title} | Tecway`,
      description: project.longDescription || project.description,
      url: `${SITE_URL}/projects/${project.slug}`,
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Tecway`,
      description: project.longDescription || project.description,
      images: [imageUrl],
    },
    alternates: {
      canonical: `${SITE_URL}/projects/${project.slug}`,
    },
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return <ProjectClient project={null} />;
  }

  const projectSchema = getProjectSchema(project);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Projects", url: `${SITE_URL}/projects` },
    { name: project.title, url: `${SITE_URL}/projects/${project.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ProjectClient project={project} />
    </>
  );
}
