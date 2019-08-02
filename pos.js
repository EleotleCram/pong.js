import $ from 'https://dev.jspm.io/jquery@3.4.1';

// Extend jQuery with the .pos plugin which
// gives positions in top, left, bottom, right properties.
$.fn.pos = function(newPosition) {
    const width = $(this).width();
    const halfWidth = width / 2;
    const height = $(this).height();
    const halfHeight = height / 2;

    if(newPosition) {
        if(newPosition.bottom) {
            newPosition.top = newPosition.bottom - height;
            delete newPosition.bottom;
        }
        if(newPosition.right) {
            newPosition.left = newPosition.right - width;
            delete newPosition.right;
        }
        if(newPosition.center && newPosition.center.x) {
            newPosition.left = newPosition.center.x - halfWidth;
        }
        if(newPosition.center && newPosition.center.y) {
            newPosition.top = newPosition.center.y - halfHeight;
        }
        return $(this).offset(newPosition);
    }

    const {top, left} = $(this).offset();
    const right = left + width;
    const bottom = top + height;
    const center = {
        x: left + halfWidth,
        y: top + halfHeight,
    };
    return {
        top,
        left,
        bottom,
        right,
        center,
    };
};
