import PinModel from "./PinModel";

class Edge {
    private edge_desc: string
    private edge_duration: number
    private edge_end: PinModel
    private edge_start: PinModel
    private edge_trail: number
    private edge_transport: string
    private id: number
}

export default Edge
