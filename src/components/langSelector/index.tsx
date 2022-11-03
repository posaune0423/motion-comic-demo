import { memo } from 'react'
import { Select } from 'native-base'
import { Lang } from '../../types'

type Props = {
  lang: Lang
  handleLangChange: (lang: Lang) => void
}

export const LangSelector = memo(({ lang, handleLangChange }: Props) => {
  return (
    <Select
      selectedValue={lang}
      minWidth="100"
      accessibilityLabel="Choose Language"
      placeholder="Choose Language"
      onValueChange={newLang => handleLangChange(newLang as Lang)}
    >
      <Select.Item label="日本語" value="ja" />
      <Select.Item label="English" value="en" />
    </Select>
  )
})
