import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Flex } from 'components';

import BadgeDeltaIcon from 'components/icon-elements/BadgeDeltaIcon/BadgeDeltaIcon';
import { DeltaTypes } from '@utils/component-utils';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/IconElements/BadgeDeltaIcon',
    component: BadgeDeltaIcon,
} as ComponentMeta<typeof BadgeDeltaIcon>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof BadgeDeltaIcon> = (args) => (
    <Flex>
        <div>Hello</div>
        <BadgeDeltaIcon {...args} />
    </Flex>
);
  
export const Increase = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Increase.args = {
    deltaType: DeltaTypes.Increase
};

export const ModerateIncrease = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ModerateIncrease.args = {
    deltaType: DeltaTypes.ModerateIncrease
};

export const Decrease = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Decrease.args = {
    deltaType: DeltaTypes.Decrease
};

export const ModerateDecrease = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ModerateDecrease.args = {
    deltaType: DeltaTypes.ModerateDecrease
};

export const Unchanged = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Unchanged.args = {
    deltaType: DeltaTypes.Unchanged
};

export const IncreaseReversed = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
IncreaseReversed.args = {
    deltaType: DeltaTypes.Increase,
    isIncreasePositive: false
};

export const ModerateIncreaseReversed = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ModerateIncreaseReversed.args = {
    deltaType: DeltaTypes.ModerateIncrease,
    isIncreasePositive: false
};

export const DecreaseReversed = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DecreaseReversed.args = {
    deltaType: DeltaTypes.Decrease,
    isIncreasePositive: false
};

export const ModerateDecreaseReversed = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ModerateDecreaseReversed.args = {
    deltaType: DeltaTypes.ModerateDecrease,
    isIncreasePositive: false
};

export const UnchangedReversed = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
UnchangedReversed.args = {
    deltaType: DeltaTypes.Unchanged,
    isIncreasePositive: false
};


export const IncreaseXs = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
IncreaseXs.args = {
    deltaType: DeltaTypes.Increase,
    badgeSize: 'xs'
};

export const ModerateIncreaseXs = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ModerateIncreaseXs.args = {
    deltaType: DeltaTypes.ModerateIncrease,
    badgeSize: 'xs'
};

export const DecreaseXs = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DecreaseXs.args = {
    deltaType: DeltaTypes.Decrease,
    badgeSize: 'xs'
};

export const ModerateDecreaseXs = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ModerateDecreaseXs.args = {
    deltaType: DeltaTypes.ModerateDecrease,
    badgeSize: 'xs'
};

export const UnchangedXs = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
UnchangedXs.args = {
    deltaType: DeltaTypes.Unchanged,
    badgeSize: 'xs'
};

