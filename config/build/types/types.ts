export type BuildMode = 'production' | 'development'
export type BuildPlatform = 'desktop' | 'mobile'

export interface BuildPaths {
    entry: string
    html: string
    output: string
    src: string
    public: string
}

export interface BuildOptions {
    port?: number
    paths?: BuildPaths
    mode?: BuildMode
    platform?: BuildPlatform
}