interface ISkillInputProps {
  selectedSkill?: string;
  index: number;
}

interface ISkillOptionProps {
  id: number;
  onSelectSkill: (skill: string) => void;
}

export type { ISkillInputProps, ISkillOptionProps };
