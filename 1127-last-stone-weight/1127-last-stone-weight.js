/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    const maxHeap = new MaxPriorityQueue();
    for (const stone of stones){
        maxHeap.enqueue(stone);
    }
    while(maxHeap.size() > 1){
        const largest = maxHeap.dequeue().element;
        const nextLeargest = maxHeap.dequeue().element;
        if(largest !== nextLeargest){
            maxHeap.enqueue(largest - nextLeargest);
        }
    }
    return maxHeap.size() === 0 ? 0 : maxHeap.front().element;
};