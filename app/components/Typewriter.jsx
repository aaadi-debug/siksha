import React, { memo } from 'react';
import { Typewriter as TypewriterComponent } from 'react-simple-typewriter';

const Typewriter = memo(({ words, loop, cursor, cursorStyle, typeSpeed, deleteSpeed, delaySpeed, onLoopDone, onType }) => (
    <TypewriterComponent
        words={words}
        loop={loop}
        cursor={cursor}
        cursorStyle={cursorStyle}
        typeSpeed={typeSpeed}
        deleteSpeed={deleteSpeed}
        delaySpeed={delaySpeed}
        onLoopDone={onLoopDone}
        onType={onType}
    />
));

export default Typewriter;
