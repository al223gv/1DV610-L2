import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

const filepath = fileURLToPath(import.meta.url)
const __dirname = dirname(filepath)

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname
      }
    },
    ignores: ["dist/**"]
  }
)
