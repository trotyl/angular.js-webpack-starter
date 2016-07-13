export interface IDetailPhone {
    id: string
    name: string
    description: string
    age: number
    availability: string[]
    images: string[]
    battery: {
        type: string
        talkTime: string
        standbyTime: string
    }
    storage: {
        ram: string
        flash: string
    }
    connectivity: {
        cell: string
        wifi: string
        bluetooth: string
        infrared: boolean
        gps: boolean
    }
    android: {
        os: string
        ui: string
    }
    sizeAndWeight: {
        dimensions: string[]
        weight: string
    }
    display: {
        screenSize: string
        screenResolution: string
        touchScreen: boolean
    }
    hardware: {
        cpu: string
        usb: string
        audioJack: string
        fmRadio: boolean
        accelerometer: boolean
    }
    camera: {
        primary: string
        features: string[]
    }
    additionalFeatures: string
}
