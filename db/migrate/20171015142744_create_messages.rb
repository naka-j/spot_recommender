#coding: utf-8
class CreateMessages < ActiveRecord::Migration[5.1]
  def change
    create_table :messages do |t|
      t.text :content
      t.float :latitude
      t.float :longitude
      t.timestamps
    end

    add_index :messages, [:latitude]
    add_index :messages, [:longitude]
  end
end
