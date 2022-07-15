type Address = string | null | undefined;

export function useCutAddress(address: Address): string {
  if (!address) return '';

  const start = address.substring(0, 6);
  const end = address
    .split('')
    .reverse()
    .join('')
    .substring(0, 4)

  return `${start}...${end}`
}