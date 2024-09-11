import { ReactNode } from 'react'

/**
 * This is just for practice :)
 */

type PageType = 'backoffice' | 'main'
export interface PageUriType {
    href: string
    name: string
    type?: PageType
    icon?: ReactNode
}

type Uri<T> = {
    [a in keyof T]: PageUriType
}
type UriPages<T> = {
    [a in keyof T]: {
        href: string
        name: string
        icon?: ReactNode
    }
}


export class Path<T> {
    private _paths: Uri<T>
    constructor(paths: Uri<T>) {
        this._paths = paths
    }

    private getPages(type: PageType | 'all') {
        const retVal = {} as UriPages<T>
        for (const path in this._paths) {
            if (type === 'all' || this._paths[path]?.type === type) {
                if (this._paths[path].icon)
                    retVal[path] = {
                        name: this._paths[path].name,
                        href: this._paths[path].href,
                        icon: this._paths[path].icon,
                    }
                else
                    retVal[path] = {
                        name: this._paths[path].name,
                        href: this._paths[path].href,
                    }
            }
        }
        return retVal
    }
    get pages() {
        return this.getPages('all')
    }
    get main() {
        return this.getPages('main')
    }
    get backoffice() {
        return this.getPages('backoffice')
    }
}


