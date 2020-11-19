function startApp() {
    startPolyfill();
    initializeReact360();
}

function startPolyfill() {
    var polyfill = new WebVRPolyfill({
        ADDITIONAL_VIEWERS: [],
        DEFAULT_VIEWER: '',
        PROVIDE_MOBILE_VRDISPLAY: true,
        MOBILE_WAKE_LOCK: true,
        DEBUG: false,
        DPDB_URL: 'https://dpdb.webvr.rocks/dpdb.json',
        K_FILTER: 0.98,
        PREDICTION_TIME_S: 0.040,
        CARDBOARD_UI_DISABLED: false,
        ROTATE_INSTRUCTIONS_DISABLED: false,
        YAW_ONLY: false,
        BUFFER_SCALE: 0.5,
        DIRTY_SUBMIT_FRAME_BINDINGS: false
    });
}

function initializeReact360() {
    var react360Instance = React360.init(
        'index.bundle?platform=vr&dev=true',
        document.getElementById('initialize'),
        {
            assetRoot: 'static_assets/',
        }
    );
    removeDefaultUI();
    insertButtonFunctions(react360Instance);
}

function removeDefaultUI() {
    const initializeDiv = document.getElementById('initialize');
    const defaultUI = initializeDiv.getElementsByTagName('div')[1];
    initializeDiv.removeChild(defaultUI);
}

function insertButtonFunctions(react360Instance) {
    var fullscreenButton = document.getElementById('fullscreen-button');
    var vrButton = document.getElementById('vr-button');

    fullscreenButton.addEventListener('click', function() {
        enterFullscreen(document.querySelector('canvas'));
    });

    navigator.getVRDisplays().then(function (vrDisplays) {
        if (vrDisplays.length) {
            vrButton.addEventListener('click', () => vrButtonFunction(vrDisplays[0], react360Instance));
        }
        else {
            vrButton.style.opacity = 0.5;
            vrButton.style.cursor = 'unset';
        }
    });
}

function vrButtonFunction(vrDisplay, react360Instance) {
    var SimpleRaycaster = {
        drawsCursor: () => true,
        fillDirection: direction => {
            direction[0] = 0;
            direction[1] = 0;
            direction[2] = -1;
            return true;
        },
        fillOrigin: origin => {
            origin[0] = 0;
            origin[1] = 0;
            origin[2] = 0;
            return true;
        },
        getMaxLength: () => Infinity,
        getType: () => "simple",
        hasAbsoluteCoordinates: () => false
    };
    var allRaycasters = react360Instance.controls.getRaycasters();

    vrDisplay.requestPresent([{source: document.querySelector('canvas')}]);

    react360Instance.controls.clearRaycasters();
    react360Instance.controls.addRaycaster(SimpleRaycaster);

    document.getElementById('reload-panel').style.zIndex = '1';
    document.getElementById('reload-panel').addEventListener('click', function() {
        react360Instance.controls.clearRaycasters();
        react360Instance.controls.addRaycaster(allRaycasters[0]);
        react360Instance.controls.addRaycaster(allRaycasters[1]);
        react360Instance.controls.addRaycaster(allRaycasters[2]);
        document.getElementById('reload-panel').style.zIndex = '-1';
    });
}

function enterFullscreen(el) {
    if (el.requestFullscreen) el.requestFullscreen();
    else if (el.mozRequestFullScreen) el.mozRequestFullScreen();
    else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
    else if (el.msRequestFullscreen) el.msRequestFullscreen();
}