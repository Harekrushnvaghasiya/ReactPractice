import React from 'react';
import { BUTTON_SIZE, BUTTON_VARIANTS } from '../global/constants';
import { Buttons,Icon } from './style';
import  SVGIcon from '../../assets/Icons/SVGIcon';

/**
 * Button Component
 * @param {Object} Props - The props for the Button component.
 * @param {void} Props.onClick - Function to be called when the button is clicked.
 * @param {boolean} Props.isDisabled - Whether the button is disabled or not.
 * @param {string} Props.type - The type of the button (button, submit, reset).
 * @param {string} Props.ariaLabel - The aria-label attribute for accessibility.
 * @param {string} Props.title - The text to be displayed on the button.
 * @param {string} Props.variant - The variant of the button (primary, secondary, etc.).
 * @param {string} Props.size - The size of button(small,medium etc..)
 * @param {boolean} Props.isShowIcon  - show icon or not.
 */

interface Props {
    title: string | undefined;
    onClick?: () => void;
    isDisabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    href?: string;
    hrefTarget?: string;
    ariaLabel?: string;
    variant?: (typeof BUTTON_VARIANTS)[keyof typeof BUTTON_VARIANTS];
    size?: (typeof BUTTON_SIZE)[keyof typeof BUTTON_SIZE];
    isShowIcon?: boolean;
    
}
const Button: React.FC<Props> = ({
        onClick,
        isDisabled = false,
        type,
        href,
        hrefTarget = '_self',
        ariaLabel,
        title,
        variant = BUTTON_VARIANTS.PRIMARY,
        size= BUTTON_SIZE.MEDIUM,
        isShowIcon = false,
    }) => {
        const buttonRef = React.useRef<HTMLButtonElement>(null);

    
    return (
      <Buttons
        onClick={onClick}
        disabled={isDisabled}
        type={type}
        as={href ? "a" : "button"}
        href={href}
        aria-label={ariaLabel || title}
        target={href && hrefTarget ? hrefTarget : undefined}
        ref={buttonRef}
        variant={variant}
        size={size}
      >
        <div className="hover-effect"></div>
        <span>{title}</span>
        {isShowIcon && (
          <Icon>
            <SVGIcon name="pause-icon" width="22" height="22" />
          </Icon>
        )}
      </Buttons>
    );
};

export default Button;