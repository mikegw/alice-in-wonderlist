class AddColumnToNotifications < ActiveRecord::Migration
  def change
    add_column :notifications, :text, :text
  end
end
