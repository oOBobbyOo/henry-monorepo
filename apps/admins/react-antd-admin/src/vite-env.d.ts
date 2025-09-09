/// <reference types="vite/client" />

declare module '*.md' {
  const content: string
  export default content
}

declare module '*.css' {
  const styles: { readonly [key: string]: string }
  export default styles
}

declare module '*.module.css' {
  const styles: { readonly [key: string]: string }
  export default styles
}
