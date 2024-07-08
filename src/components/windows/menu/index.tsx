import { useEffect, useState } from "react";
import { WindowMenuProps } from "../../../types/WindowTypes";
import { Content, Dropdown } from "./styles";
import { MenuItemsProps } from "../../../types/ComponentsTypes";


let defaultProps = {
    file: false,
    edit: false,
    search: false,
    help: false,
} as MenuItemsProps;

function WindowMenu({ notSearchable, page }: WindowMenuProps) {
    const [active, setActive] = useState(false);

    const [focus, setFocus] = useState<MenuItemsProps>(defaultProps);

    useEffect(() => {
        function handlePageFocusChange() {
            if (!page.isInFocus) {
                setActive(false);
                setFocus(defaultProps);
            }
        }

        handlePageFocusChange()
    }, [page])

    return (
        <Content>
            <Dropdown $active={active} $focus={focus.file}
                onClick={() => setActive(!active)}
                onMouseEnter={() => { setFocus({ ...defaultProps, file: true }) }}
            >
                <span>File</span>
                {/* <DropdownContent>
                    <Span>Link 1</Span>
                    <Span>Link 2</Span>
                    <Span>Link 3</Span>
                </DropdownContent> */}
            </Dropdown>
            <Dropdown $active={active} $focus={focus.edit}
                onClick={() => setActive(!active)}
                onMouseEnter={() => { setFocus({ ...defaultProps, edit: true }) }}
            >
                <span>Edit</span>
                {/* <DropdownContent>
                    <Span>Link 1</Span>
                    <Span>Link 2</Span>
                    <Span>Link 3</Span>
                </DropdownContent> */}
            </Dropdown>
            {!!!notSearchable && <Dropdown $active={active} $focus={focus.search}
                onClick={() => setActive(!active)}
                onMouseEnter={() => { setFocus({ ...defaultProps, search: true }) }}
            >
                <span>Search</span>
                {/* <DropdownContent>
                    <Span>Link 1</Span>
                    <Span>Link 2</Span>
                    <Span>Link 3</Span>
                </DropdownContent> */}
            </Dropdown>}
            <Dropdown $active={active} $focus={focus.help}
                onClick={() => setActive(!active)}
                onMouseEnter={() => { setFocus({ ...defaultProps, help: true }) }}
            >
                <span>Help</span>
                {/* <DropdownContent>
                    <Span>Link 1</Span>
                    <Span>Link 2</Span>
                    <Span>Link 3</Span>
                </DropdownContent> */}
            </Dropdown>
        </Content>
    )

}

export { WindowMenu };