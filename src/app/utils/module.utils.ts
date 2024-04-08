import { Attribute } from "../models/attributes.interface";

export function addTag(tag: string, text: string, attributes: Attribute[] | null = null): string {
  let properties = ''

  if (attributes && attributes.length) {
    properties = attributes.map(attribute => `${addAttribute(attribute)}`).join(' ');
  }

  return `<${tag} ${properties}>${text}</${tag}>`;
}

export function addAttribute(attribute: Attribute): string {
  return `${attribute.name}="${attribute.value}"`
}
