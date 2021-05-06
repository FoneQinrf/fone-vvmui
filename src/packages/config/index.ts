/*
 * @Author: Fone`峰
 * @Date: 2021-04-11 20:54:49
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-04-22 15:08:28
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */

export interface InstallOptions {
    $toast: {
        duration: number
    },
    size: string,
    popup: {
        teleport: any
    }
}

let $VVMUI: InstallOptions = {
    $toast: {
        duration: 1000
    },
    size: "",
    popup: {
        teleport: "body"
    }
};

const setConfig = (option: any = {}): void => {
    Object.assign($VVMUI, option);
}

const getConfig = () => {
    return $VVMUI
}

export {
    getConfig,
    setConfig
}