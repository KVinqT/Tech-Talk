import React from 'react';
import { Tooltip } from '@nextui-org/tooltip';
import { Button } from '@nextui-org/button';
const ProfileTooltip = (props: { value: string }) => {
  return (
    <Tooltip content={props.value} key={props.value} color="primary" showArrow>
      <Button className="bg-primary">{props.value}</Button>
    </Tooltip>
  );
};

export default ProfileTooltip;
