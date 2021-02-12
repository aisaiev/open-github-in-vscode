function getActionItems() {
    return document.querySelector('.pagehead-actions');
};

function createSvgImage() {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svg.setAttribute('height', '16');
    svg.setAttribute('width', '16');
    svg.setAttribute('viewBox', '0 0 32 32');
    svg.setAttribute('class', 'octicon mr-1');
    const svgPath1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    svgPath1.setAttribute('d', 'M29.01,5.03,23.244,2.254a1.742,1.742,0,0,0-1.989.338L2.38,19.8A1.166,1.166,0,0,0,2.3,21.447c.025.027.05.053.077.077l1.541,1.4a1.165,1.165,0,0,0,1.489.066L28.142,5.75A1.158,1.158,0,0,1,30,6.672V6.605A1.748,1.748,0,0,0,29.01,5.03Z');
    svgPath1.style.fill = '#0065a9';
    const svgPath2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    svgPath2.setAttribute('d', 'M29.01,26.97l-5.766,2.777a1.745,1.745,0,0,1-1.989-.338L2.38,12.2A1.166,1.166,0,0,1,2.3,10.553c.025-.027.05-.053.077-.077l1.541-1.4A1.165,1.165,0,0,1,5.41,9.01L28.142,26.25A1.158,1.158,0,0,0,30,25.328V25.4A1.749,1.749,0,0,1,29.01,26.97Z');
    svgPath2.style.fill = '#007acc';
    const svgPath3 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    svgPath3.setAttribute('d', 'M23.244,29.747a1.745,1.745,0,0,1-1.989-.338A1.025,1.025,0,0,0,23,28.684V3.316a1.024,1.024,0,0,0-1.749-.724,1.744,1.744,0,0,1,1.989-.339l5.765,2.772A1.748,1.748,0,0,1,30,6.6V25.4a1.748,1.748,0,0,1-.991,1.576Z');
    svgPath3.style.fill = '#1f9cf0';
    svg.appendChild(svgPath1);
    svg.appendChild(svgPath2);
    svg.appendChild(svgPath3);
    return svg;
};

function createVsCodeButton() {
    const vsCodeButton = document.createElement('span');
    vsCodeButton.className = 'btn btn-sm';
    vsCodeButton.setAttribute('aria-label', 'Open repository in VS Code');
    vsCodeButton.appendChild(createSvgImage());
    const buttonTitle = document.createTextNode('Open in VS Code');
    vsCodeButton.appendChild(buttonTitle);
    vsCodeButton.onclick = () => {
        window.open(getVsCodeLink(), '_blank')
    }
    return vsCodeButton;
}

function createOpenInVsCodeItem() {
    const listItem = document.createElement('li');
    const vsCodeButton = createVsCodeButton();
    listItem.appendChild(vsCodeButton);
    return listItem;
};


function appendOpenVsCodeButton() {
    const actionItems = getActionItems();
    if (actionItems) {
        const openInVsCodeItem = createOpenInVsCodeItem();
        actionItems.appendChild(openInVsCodeItem);
    }
};

function getVsCodeLink() {
    return window.location.href.replace(/https:\/\/github\.com/g,"https://github1s.com");
}

appendOpenVsCodeButton();