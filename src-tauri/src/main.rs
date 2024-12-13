use tauri::command;

#[command]
fn fetch_data() -> String {
    "Hello from Rust!".to_string()
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![fetch_data])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
