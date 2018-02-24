export interface EventHandler<E> {
    (e: E): void;
}

export interface Events {
    // Clipboard Events
    onCopy?: EventHandler<ClipboardEvent>;
    onCopyCapture?: EventHandler<ClipboardEvent>;
    onCut?: EventHandler<ClipboardEvent>;
    onCutCapture?: EventHandler<ClipboardEvent>;
    onPaste?: EventHandler<ClipboardEvent>;
    onPasteCapture?: EventHandler<ClipboardEvent>;

    // Composition Events
    onCompositionEnd?: EventHandler<CompositionEvent>;
    onCompositionEndCapture?: EventHandler<CompositionEvent>;
    onCompositionStart?: EventHandler<CompositionEvent>;
    onCompositionStartCapture?: EventHandler<CompositionEvent>;
    onCompositionUpdate?: EventHandler<CompositionEvent>;
    onCompositionUpdateCapture?: EventHandler<CompositionEvent>;

    // Focus Events
    onFocus?: EventHandler<FocusEvent>;
    onFocusCapture?: EventHandler<FocusEvent>;
    onBlur?: EventHandler<FocusEvent>;
    onBlurCapture?: EventHandler<FocusEvent>;

    // Form Events
    onChange?: EventHandler<Event>;
    onChangeCapture?: EventHandler<Event>;
    onInput?: EventHandler<Event>;
    onInputCapture?: EventHandler<Event>;
    onReset?: EventHandler<Event>;
    onResetCapture?: EventHandler<Event>;
    onSubmit?: EventHandler<Event>;
    onSubmitCapture?: EventHandler<Event>;
    onInvalid?: EventHandler<Event>;
    onInvalidCapture?: EventHandler<Event>;

    // Image Events
    onLoad?: EventHandler<Event>;
    onLoadCapture?: EventHandler<Event>;
    onError?: EventHandler<Event>; // also a Media Event
    onErrorCapture?: EventHandler<Event>; // also a Media Event

    // Keyboard Events
    onKeyDown?: EventHandler<KeyboardEvent>;
    onKeyDownCapture?: EventHandler<KeyboardEvent>;
    onKeyPress?: EventHandler<KeyboardEvent>;
    onKeyPressCapture?: EventHandler<KeyboardEvent>;
    onKeyUp?: EventHandler<KeyboardEvent>;
    onKeyUpCapture?: EventHandler<KeyboardEvent>;

    // Media Events
    onAbort?: EventHandler<Event>;
    onAbortCapture?: EventHandler<Event>;
    onCanPlay?: EventHandler<Event>;
    onCanPlayCapture?: EventHandler<Event>;
    onCanPlayThrough?: EventHandler<Event>;
    onCanPlayThroughCapture?: EventHandler<Event>;
    onDurationChange?: EventHandler<Event>;
    onDurationChangeCapture?: EventHandler<Event>;
    onEmptied?: EventHandler<Event>;
    onEmptiedCapture?: EventHandler<Event>;
    onEncrypted?: EventHandler<Event>;
    onEncryptedCapture?: EventHandler<Event>;
    onEnded?: EventHandler<Event>;
    onEndedCapture?: EventHandler<Event>;
    onLoadedData?: EventHandler<Event>;
    onLoadedDataCapture?: EventHandler<Event>;
    onLoadedMetadata?: EventHandler<Event>;
    onLoadedMetadataCapture?: EventHandler<Event>;
    onLoadStart?: EventHandler<Event>;
    onLoadStartCapture?: EventHandler<Event>;
    onPause?: EventHandler<Event>;
    onPauseCapture?: EventHandler<Event>;
    onPlay?: EventHandler<Event>;
    onPlayCapture?: EventHandler<Event>;
    onPlaying?: EventHandler<Event>;
    onPlayingCapture?: EventHandler<Event>;
    onProgress?: EventHandler<Event>;
    onProgressCapture?: EventHandler<Event>;
    onRateChange?: EventHandler<Event>;
    onRateChangeCapture?: EventHandler<Event>;
    onSeeked?: EventHandler<Event>;
    onSeekedCapture?: EventHandler<Event>;
    onSeeking?: EventHandler<Event>;
    onSeekingCapture?: EventHandler<Event>;
    onStalled?: EventHandler<Event>;
    onStalledCapture?: EventHandler<Event>;
    onSuspend?: EventHandler<Event>;
    onSuspendCapture?: EventHandler<Event>;
    onTimeUpdate?: EventHandler<Event>;
    onTimeUpdateCapture?: EventHandler<Event>;
    onVolumeChange?: EventHandler<Event>;
    onVolumeChangeCapture?: EventHandler<Event>;
    onWaiting?: EventHandler<Event>;
    onWaitingCapture?: EventHandler<Event>;

    // MouseEvents
    onClick?: EventHandler<MouseEvent>;
    onClickCapture?: EventHandler<MouseEvent>;
    onContextMenu?: EventHandler<MouseEvent>;
    onContextMenuCapture?: EventHandler<MouseEvent>;
    onDblClick?: EventHandler<MouseEvent>;
    // onDoubleClick?: EventHandler<MouseEvent>;
    // onDoubleClickCapture?: EventHandler<MouseEvent>;
    onDrag?: EventHandler<DragEvent>;
    onDragCapture?: EventHandler<DragEvent>;
    onDragEnd?: EventHandler<DragEvent>;
    onDragEndCapture?: EventHandler<DragEvent>;
    onDragEnter?: EventHandler<DragEvent>;
    onDragEnterCapture?: EventHandler<DragEvent>;
    onDragExit?: EventHandler<DragEvent>;
    onDragExitCapture?: EventHandler<DragEvent>;
    onDragLeave?: EventHandler<DragEvent>;
    onDragLeaveCapture?: EventHandler<DragEvent>;
    onDragOver?: EventHandler<DragEvent>;
    onDragOverCapture?: EventHandler<DragEvent>;
    onDragStart?: EventHandler<DragEvent>;
    onDragStartCapture?: EventHandler<DragEvent>;
    onDrop?: EventHandler<DragEvent>;
    onDropCapture?: EventHandler<DragEvent>;
    onMouseDown?: EventHandler<MouseEvent>;
    onMouseDownCapture?: EventHandler<MouseEvent>;
    onMouseEnter?: EventHandler<MouseEvent>;
    onMouseLeave?: EventHandler<MouseEvent>;
    onMouseMove?: EventHandler<MouseEvent>;
    onMouseMoveCapture?: EventHandler<MouseEvent>;
    onMouseOut?: EventHandler<MouseEvent>;
    onMouseOutCapture?: EventHandler<MouseEvent>;
    onMouseOver?: EventHandler<MouseEvent>;
    onMouseOverCapture?: EventHandler<MouseEvent>;
    onMouseUp?: EventHandler<MouseEvent>;
    onMouseUpCapture?: EventHandler<MouseEvent>;

    // Selection Events
    onSelect?: EventHandler<Event>;
    onSelectCapture?: EventHandler<Event>;

    // Touch Events
    onTouchCancel?: EventHandler<TouchEvent>;
    onTouchCancelCapture?: EventHandler<TouchEvent>;
    onTouchEnd?: EventHandler<TouchEvent>;
    onTouchEndCapture?: EventHandler<TouchEvent>;
    onTouchMove?: EventHandler<TouchEvent>;
    onTouchMoveCapture?: EventHandler<TouchEvent>;
    onTouchStart?: EventHandler<TouchEvent>;
    onTouchStartCapture?: EventHandler<TouchEvent>;

    // UI Events
    onScroll?: EventHandler<UIEvent>;
    onScrollCapture?: EventHandler<UIEvent>;

    // Wheel Events
    onWheel?: EventHandler<WheelEvent>;
    onWheelCapture?: EventHandler<WheelEvent>;

    // Animation Events
    onAnimationStart?: EventHandler<AnimationEvent>;
    onAnimationStartCapture?: EventHandler<AnimationEvent>;
    onAnimationEnd?: EventHandler<AnimationEvent>;
    onAnimationEndCapture?: EventHandler<AnimationEvent>;
    onAnimationIteration?: EventHandler<AnimationEvent>;
    onAnimationIterationCapture?: EventHandler<AnimationEvent>;

    // Transition Events
    onTransitionEnd?: EventHandler<TransitionEvent>;
    onTransitionEndCapture?: EventHandler<TransitionEvent>;
}
