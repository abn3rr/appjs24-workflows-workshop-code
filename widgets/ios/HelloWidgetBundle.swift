//
//  HelloWidgetBundle.swift
//  HelloWidget
//
//  Created by Abner Rios on 22/05/24.
//

import WidgetKit
import SwiftUI

@main
struct HelloWidgetBundle: WidgetBundle {
    var body: some Widget {
        HelloWidget()
        HelloWidgetLiveActivity()
    }
}
