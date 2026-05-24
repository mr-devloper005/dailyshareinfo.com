import { TaskListPage } from '@/components/tasks/task-list-page'
import { buildTaskMetadata } from '@/lib/seo'
import { taskPageMetadata } from '@/config/site.content'

export const revalidate = 3

export const generateMetadata = () =>
  buildTaskMetadata('article', {
    path: '/article',
    title: taskPageMetadata.article.title,
    description: taskPageMetadata.article.description,
  })

export async function ArticleTaskPage({
  searchParams,
  basePath = '/article',
}: {
  searchParams?: Promise<{ category?: string; page?: string }>
  basePath?: string
}) {
  const resolved = (await searchParams) || {}
  const page = Math.max(1, Math.floor(Number(resolved.page) || 1))
  return <TaskListPage task="article" category={resolved.category} page={page} basePath={basePath} />
}

export default ArticleTaskPage
