// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { find, filter, get, startsWith, map, orderBy } from 'lodash';

class SideNav extends Component {
  static propTypes = {
    navItemsLookup: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      navItemsLookup: props.navItemsLookup,
    };
  }

  toggleItemExpanded = id => () => {
    const { navItemsLookup } = this.state;

    // Derive the nav item and its properties.
    const navItem = get(navItemsLookup, `[${id}]`);
    const hasChildren = get(navItem, 'hasChildren');
    const expanded = get(navItem, 'expanded');

    // Escape early if the nav item has no children.
    if (!hasChildren) {
      return;
    }

    // Flip the item's expanded property.
    this.setState({
      navItemsLookup: {
        ...navItemsLookup,
        [id]: {
          ...navItemsLookup[id],
          expanded: !expanded,
        },
      },
    });
  };

  renderChildItems = (parentID, depth) => {
    const { toggleItemExpanded } = this;
    const { navItemsLookup } = this.state;

    // Derive the items to render.
    const filteredNavItems = filter(
      navItemsLookup,
      item => item.parentID === parentID,
    );

    // Sort the items by `order`.
    const sortedNavItems = orderBy(filteredNavItems, 'order', 'asc');

    return map(sortedNavItems, (item, index) => {
      // Derive the item properties.
      const expanded = get(item, 'expanded');
      const hasChildren = get(item, 'hasChildren', false);
      const href = get(item, 'href');
      const id = get(item, 'id');
      const label = get(item, 'label', '');

      // Derive if the nav item is selected and the selected class.
      const isSelected = startsWith(window.location.pathname, href);

      // Derive the depth booleans.
      const isFirstLevel = depth === 1;
      const isSecondLevel = depth === 2;
      const isDeeperThanSecondLevel = depth >= 2;

      // Caclculate the indentation for the child items.
      const indentation = isDeeperThanSecondLevel ? 20 * (depth - 1) : 20;

      // Determine if we should show a line at the end.
      const showLine = isFirstLevel && index !== sortedNavItems.length - 1;

      // Derive the label element.
      const labelElement = href ? (
        <a
          className="va-sidenav-item-label-text"
          href={href}
          rel="noopener noreferrer"
        >
          {label}
        </a>
      ) : (
        <div className="va-sidenav-item-label-text">{label}</div>
      );

      return (
        <li className={`va-sidenav-level-${depth}`} key={id}>
          <button
            aria-label={label}
            className={classNames({
              'va-sidenav-item-label': true,
              selected: isSelected,
            })}
            onClick={toggleItemExpanded(id)}
            style={{ paddingLeft: indentation }}
          >
            {/* Label */}
            {labelElement}

            {/* Expand/Collapse Button */}
            {hasChildren &&
              isDeeperThanSecondLevel && (
                <button
                  aria-label={`Expand "${label}"`}
                  className="va-sidenav-toggle-expand"
                >
                  <i
                    className={classNames({
                      fa: true,
                      'fa-chevron-down': expanded,
                      'fa-chevron-up': !expanded,
                    })}
                  />
                </button>
              )}
          </button>

          {/* Duplicate Line + Label when Expanded */}
          {expanded &&
            isSecondLevel && (
              <>
                <div className="line" />
                <div
                  className={classNames({
                    'va-sidenav-item-label': true,
                    'va-sidenav-item-label-duplicate': true,
                    selected: isSelected,
                  })}
                >
                  {labelElement}
                </div>
              </>
            )}

          {/* Child Items */}
          {expanded && <ul>{this.renderChildItems(id, depth + 1)}</ul>}

          {/* Ending Line */}
          {showLine && <div className="line" />}
        </li>
      );
    });
  };

  render() {
    const { renderChildItems } = this;
    const { navItemsLookup } = this.props;

    // Derive the parent-most nav item. This is O(n), which isn't great but I'm assuming there won't be 1000s of side nav items.
    const parentMostNavItem = find(navItemsLookup, item => !item.parentID);
    const parentMostID = get(parentMostNavItem, 'id');

    // Escape early if we have no nav items to render.
    if (!parentMostID) {
      return null;
    }

    return (
      <ul className="usa-width-one-fourth va-sidenav">
        {/* Render all the items recursively. */}
        {renderChildItems(parentMostID, 1)}
      </ul>
    );
  }
}

export default SideNav;
