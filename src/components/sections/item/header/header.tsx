import React, { useState } from 'react';
import { SectionRes } from '../../section-res.interface';
import { FormRenameSection } from '../../rename';
import { TitleHeaderItemSection } from './title';
import { WrapperHeaderItemSection } from './wrapper';
import { MenuSection } from '../../menu';

interface Props {
  section: SectionRes;
}

export const HeaderItemSection: React.FC<Props> = ({ section }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <WrapperHeaderItemSection>
      {showForm ? (
        <FormRenameSection handleClose={() => setShowForm(false)} section={section} />
      ) : (
        <TitleHeaderItemSection onClick={() => setShowForm(true)}>
          {section.title}
        </TitleHeaderItemSection>
      )}

      <MenuSection sectionId={section.id} />
    </WrapperHeaderItemSection>
  );
};
