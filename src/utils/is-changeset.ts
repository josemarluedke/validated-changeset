export const CHANGESET = '__CHANGESET__';

export default function isChangeset(changeset: any): boolean {
  return changeset['__changeset__'] === CHANGESET;
}
