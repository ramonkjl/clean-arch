import { Hasher } from "../../../data/protocols/cryptography/hasher";
import bcrypt from 'bcrypt'
import { HashComparer } from "../../../data/protocols/cryptography/hash-comparer";

export class BcryptAdapter implements Hasher, HashComparer {
  constructor(private readonly salt: number) { }

  async hash(value: string): Promise<string> {
    const hash = await bcrypt.hash(value, this.salt)
    return hash
  }

  async compare(value: string, hash: string): Promise<boolean> {
    const isValid = await bcrypt.compare(value, hash)
    return isValid
  }
}
