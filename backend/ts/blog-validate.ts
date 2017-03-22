
export function isValidBlog(blog: any) {
  if (!blog.id) {
    return false;
  }

  if (blog.id.length < 10) {
    return false;
  }

  if (Date.now() - blog.date > 365 * 100 * 24 * 60 * 60 * 1000) {
    return false;
  }

  return true;
}

export function defaultBlog(blog: any) {
  if (!blog.title) {
    blog.title = 'Untitled';
  }
}