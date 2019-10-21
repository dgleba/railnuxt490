class CreateExamples < ActiveRecord::Migration[5.1]
  def change
    create_table :examples do |t|
      t.string :name
      t.string :colour

      t.datetime "created_at"
      t.datetime "updated_at"

    end
  end
end
