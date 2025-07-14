window.vm = (node => {
    node = document.querySelector('div[class*=stage-header_stage-header-wrapper]');
    node = node[Object.keys(node).find(key => (key = String(key), key.startsWith('__reactInternal') || key.startsWith('__reactFiber')))].return.return.return;
    node = node.stateNode?.props?.vm || node.return?.updateQueue?.stores?.[0]?.value?.vm;
    if (!node) throw new Error('Could not find VM :(');
    return node;
})();

// Replace with the URL to your .sb3 file
const sb3Url = 'https://05ot3upyee.ufs.sh/f/u4H2wVPdAnftOv2WHOIM0IeJwsHdBVUrzNjZKD6GmlqFEtki';

(async () => {
    try {
        const response = await fetch(sb3Url);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        
        const arrayBuffer = await response.arrayBuffer();
        await window.vm.loadProject(arrayBuffer);
        console.log('✅ Project loaded successfully from URL');
    } catch (err) {
        console.error('❌ Failed to load project from URL:', err);
    }
})();
