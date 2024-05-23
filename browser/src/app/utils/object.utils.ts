export function transformToObjectArray(object: object): Array<any> {
  return Object.keys(object).map(key => object[key]);
}

export function transformToArray(object: object | null | undefined): any[] | null {
  if (object) {
    return Object.values(object);
  }

  return null
}

