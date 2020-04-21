export interface TreeData {
    name: string,
    age: number,
    children?: TreeData[] // 可以不传children
}